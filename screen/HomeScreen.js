import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <View className='flex-1 relative'>
      {/* Status Bar */}
      <StatusBar style='light' />
      {/* Background Image */}
      <Image
        blurRadius={70}
        source={require('../assets/images/background.jpg')}
        className='absolute w-full h-full'
      />
      <SafeAreaView className='flex flex-1'>
        <View className='mx-4 my-4 relative z-50'>
          <View className='flex-row justify-start items-center rounded-3xl bg-primaryGreen'>
            <TextInput
              placeholder='Search City'
              placeholderTextColor={'lightgray'}
              className='pl-5 h-10 flex-1 text-base text-white'
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
