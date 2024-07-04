import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }, []);
  };


export default function LoginScreen() {

    useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            margin: 100  
        }}>
         <Image source={require('./../assets/images/login.png')} 
             style={{
                 width:220,
                 height:450,
                 borderRadius:20,
                 borderWidth:6,
                 borderColor:'#000'
             }}>
         </Image>
        </View>
        <View style={styles.subContainer}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-Medium',
                textAlign:'center'
            }}>Your Ultimate 
                <Text style={{
                    color:Colors.PRIMARY,
                }}> Community Business Directory</Text> App
            </Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY
            }}>Find your favorite business near you and post your own business to your community</Text>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={{
                    textAlign: 'center',
                    color:'#fff',
                    fontFamily:'outfit'
                }}>Let's Get Started</Text>
            </TouchableOpacity>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor:'#fff',
        padding:20,
        marginTop:-120,
    },
    btn: {
        backgroundColor:Colors.PRIMARY,
        padding: 16,
        borderRadius:99,
        marginTop:20
    }
})