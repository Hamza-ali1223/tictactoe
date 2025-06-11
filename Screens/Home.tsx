import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../src/constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const Home = () => {

    const Navigation=useNavigation()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.offwhite}}>
        <View style={styles.mainContainer}>
            <View style={styles.homeModal}>
              <Text style={styles.mainLabel}>TicTacToe</Text>  
              <Text style={styles.subHeadLabel}>Welcome To TicTacToe Game</Text>
              <Text style={styles.choosePlayModeLabel}>Select Below</Text>
              <View style={styles.playModeButtonView}>
                <Pressable style={styles.userButton}
                onPress={()=>
                    Navigation.navigate('VsUser')    
                }
                >
                    <FontAwesome 
                        name='user'
                        color={'#1F2937'}
                        size={24}
                    />
                    <Text style={styles.buttonText}>
                        User
                    </Text>
                </Pressable>
                <Pressable style={styles.computerButton}
                onPress={()=>
                    Navigation.navigate('VsPC')    
                }
                >
                    <MaterialIcons 
                        name='computer'
                        color={'#1F2937'}
                        size={24}
                    />
                    <Text style={styles.buttonText}>
                        Computer
                    </Text>
                </Pressable>
              </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles= StyleSheet.create(
    {
        mainContainer:
        {
            
            justifyContent:'center',
            alignItems:'center',
        
    
        },
        homeModal:
        {
            width:'80%',
            backgroundColor:colors.background,
            borderRadius:8,
            elevation:10,
            height:'50%',
            marginTop:'50%',
            
        },
        mainLabel:
        {
            fontSize:28,
            textAlign:'center',
            marginTop:5,
            fontFamily:'SF-Pro',
            fontWeight:'200',
            padding:8,

        },
        subHeadLabel:
        {
            fontSize:20,
            textAlign:'center',
            padding:8,
            fontFamily:'SF-Pro',

        },
        choosePlayModeLabel:
        {
            fontSize:18,
            textAlign:'center',
            padding:10,
            fontWeight:'400'
        },
        playModeButtonView:
        {
            flexDirection:'row',
            margin:'5%',
        },
        userButton:
        {
            flexDirection:'row',
            marginLeft:'2%',
            padding:'5%',
            backgroundColor:colors.primary,
            borderRadius:10,
            elevation:10,
            

        },
        computerButton:
        {
             flexDirection:'row',
             marginLeft:'15%',
             padding:'5%',
             backgroundColor:colors.accent,
             borderRadius:10,
             elevation:10,
        },
        buttonText:
        {
            fontSize:15,
            padding:4,
            paddingLeft:10,
            fontWeight:'500',
            
        
        }
    }
)