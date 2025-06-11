import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, Pressable, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../src/constants/colors'
import { useNavigation } from '@react-navigation/native'
import RNHapticFeedback, { trigger } from 'react-native-haptic-feedback'

const uservspc = () => {
  const [Playerwins, SetPlayerwins] = useState(0)
  const [Botwins, SetBotwins] = useState(0)
  const [Turn, SetTurn] = useState('Player')
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [modalVisible,SetmodalVisible]=useState(false)
  const [Draw,SetDrawHappend]=useState(false)
  const [winner,SetWinner]=useState(false)

  const hapticOptions = {
    enableVibrateFallback: true, // Use vibration if haptics unavailable
    ignoreAndroidSystemSettings: false, // Respect user's system settings
  }

  const triggerHaptic= (type) =>
  {
    try
    {
      RNHapticFeedback.trigger(type,hapticOptions)
      console.log("Haptic Method Triggerd")
    }
    catch(error)
    {
      console.log('Haptics failed, using vibration fallback')
      // Fallback to basic vibration
      if (type === 'impactHeavy') {
        Vibration.vibrate([0, 200, 100, 200]) // Long vibration for heavy impact
      } else {
        Vibration.vibrate(100) // Short vibration for light impact
      }
    }
  }
    const Navigation=useNavigation();

    useEffect(()=>
    {
      console.log(`Use Effect called with Turn: ${Turn}`)
      if(Turn==='Bot')
      {
        setTimeout(()=>
        {
          const move=findbotmove(board);
        if(move!==null)
        {
          handlePress(move)
        
        }
      },500)
      }
      },[Turn])

  

      const checkDraw=(board:any) =>
      {
        let emptyCells=getEmptyCells(board)
        if(emptyCells.length===0)
        {
          if(winner===false)
          {
            SetDrawHappend(true)
          }
        }
      }
    const checkWin = (board: any[], player: string) => 
    {
        
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];

  
  for (let i = 0; i < winPatterns.length; i++) {
    let pattern = winPatterns[i];  
    
    let allMatch = true;  
    
    
    for (let j = 0; j < pattern.length; j++) {
      let position = pattern[j];  
      
      if (board[position] !== player) {
        
        allMatch = false; 
        console.log(`Match result from inner loop if: ${allMatch}`)
        break;  
      }
    }
    
   
    if (allMatch === true) {
      return true;  
    }
  }
  
  
  return false;  
};



 const handlePress = (index: number) => {
  const newBoard = [...board];
  console.log(`index: ${index}`);

  let playerSymbol = Turn === 'Player' ? 'X' : 'O';
  newBoard[index] = playerSymbol;
  SetBoard(newBoard);

  const status = checkWin(newBoard, playerSymbol);

  if (status === true) {
    if (Turn === 'Player') {
      SetPlayerwins(Playerwins + 1);
      triggerHaptic('impactMedium')
    } else {
      SetBotwins(Botwins + 1);
      triggerHaptic('notificationWarning')
    }
    SetmodalVisible(true);
    SetWinner(true);
    return;
  }


  if (getEmptyCells(newBoard).length === 0) {
    SetDrawHappend(true);
    SetmodalVisible(true); 
    return;
  }


  SetTurn(Turn === 'Player' ? 'Bot' : 'Player');
}

     const getEmptyCells= (board: any[]) =>
     {
      return board.map((val,index) => val===null? index:null).filter(index=>index!==null)
     }

     const findbotmove=(board:any)=>
     {
      const emptyCells=getEmptyCells(board)
      //Rule 01: were going to see if we can win if so then we are going to do that
      for(let i=0;i<emptyCells.length;++i)
      {
        const newBoard=[...board]
          newBoard[emptyCells[i]] = 'O'; 
        if(checkWin(newBoard,'O'))
        {
          console.log(`Rule 01 got executed`)
          return emptyCells[i];
        }
      }

      //Rule 02: were going to see if we can block Player win
      for(let i=0;i<emptyCells.length;++i)
      {
        const newBoard=[...board]
          newBoard[emptyCells[i]] = 'X'; 
        if(checkWin(newBoard,'X'))
        {
           console.log(`Rule 02 got executed`)
          return emptyCells[i];
        }
      }

      //Rule 03: Take Center
      if(board[4]===null)
      {
         console.log(`Rule 03 got executed`)
        return 4;

      }

      //Rule 04: Take the corners then
      const corners=[0,2,6,8]
      for(let i=0;i<corners.length;++i)
      {
        if(board[i]===null)
        {
           console.log(`Rule 04 got executed`)
          return i;
        }
      }

      //Rule 05: Take any side
        const sides=[1,3,5,7]
        for(let i=0;i<sides.length;++i)
        {
          if(board[i]===null)
          {
             console.log(`Rule 05 got executed`)
            return i;
          }
        }


        //Final Default
        if(emptyCells.length>0)
        {
          console.log("Fallback method is executed")
          return emptyCells[Math.floor(Math.random() *emptyCells.length)]
        }
    }
  const PlayAgain =() =>
  {
    const newBoard=Array(9).fill(null)
    SetBoard(newBoard)
    SetmodalVisible(false)
    SetTurn('Player')
    SetDrawHappend(false)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.headingLabel}>Bot Battle</Text>
      </View>
      
      <View style={styles.winCounterView}>
        <Text style={styles.xCounterText}>Player Wins: {Playerwins}</Text>
        <Text style={styles.oCounterText}>Bot Wins: {Botwins}</Text>
      </View>
      
      <View style={styles.turnContainer}>
        <Text style={styles.turnText}>Turn: {Turn}</Text>
      </View>
      <View style={styles.gameContainer}>
        <View style={styles.board}>
          {board.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cell}
              onPress={() => handlePress(index)}
              activeOpacity={0.8}
            >
              <Text style={styles.cellText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal transparent={false}
      visible={modalVisible}>
        <View style={styles.modalWinContainer}>

          {
             Draw? <Text style={styles.modalHeadingText}>Draw ⚔️</Text>:Turn==='Player'?  <Text style={styles.modalHeadingText}>You Won!🥳🙌</Text>: <Text style={styles.modalHeadingText}>You Lost 😔</Text>
          }
          <View style={styles.modalPressableContainer}>
            <Pressable style={[styles.pressableStyle,{backgroundColor:colors.primary}]}
            onPress={(Event)=>{Navigation.navigate('Home')}}>
                <Text style={styles.pressableText}>Home</Text>
            </Pressable>
            <Pressable  style={[styles.pressableStyle,{backgroundColor:colors.accent}]}
            onPress={PlayAgain}
            ><Text style={styles.pressableText}>Play Again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default uservspc

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headingLabel: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'SF-Pro',
    fontStyle: 'italic',
    paddingTop: '3%',
    color: colors.textDark,
    marginBottom: 10,
  },
  winCounterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '5%',
    marginBottom: 15,
  },
  xCounterText: {
    fontSize: 15,
    fontFamily: 'SF-Pro',
    color: colors.textLight,
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
    fontWeight: '600',
  },
  oCounterText: {
    fontSize: 15,
    fontFamily: 'SF-Pro',
    color: colors.textLight,
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
    fontWeight: '600',
  },
  turnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  turnText: {
    fontSize: 16,
    fontFamily: 'SF-Pro',
    color: colors.textDark,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    fontWeight: '500',
  },
  
  // Perfect game container
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Perfect grid exactly like reference
  board: {
    width: 360,          // Compact size like reference
    height:360,         // Perfect square
    backgroundColor: '#4A90E2',  // Blue border color like reference
    borderRadius: 12,    // Rounded corners
    padding: 6,          // Space for borders
    flexDirection: 'row',
    flexWrap: 'wrap',
    elevation: 8,
  },
  
  // Perfect cells exactly like reference
  cell: {
    width: 112,           // (240 - 6*2 - 4*2) / 3 = perfect fit
    height: 112,          // Perfect square
    backgroundColor: '#FFFFFF',  // White cells like reference
    margin: 2,           // Small gap between cells
    borderRadius: 8,     // Rounded cell corners
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,        // Subtle shadow
  },

  cellText: {
    fontSize: 32,        // Perfect size for the cells
    fontWeight: 'bold',
    color: colors.textDark,
    fontFamily: 'SF-Pro',
  },

  modalWinContainer:
    {
               
            marginLeft:'20%',
            alignItems:'center',
            width:'60%',
            backgroundColor:colors.background,
            borderRadius:8,
            elevation:10,
            height:'20%',
            marginTop:'70%',
            
    },
    modalHeadingText:
    {
        fontSize:28,
        marginTop:'5%',
    },
    modalPressableContainer:
    {
        flexDirection:'row',
        marginTop:'20%',
    },
    pressableStyle:
    {
        elevation:8,
        borderRadius:5,
        marginHorizontal:'10%'
    },
    pressableText:
    {
        fontSize:20,
        fontFamily:'SF-Pro',
        padding:'3%'
    }
})
