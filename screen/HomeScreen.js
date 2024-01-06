import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false)
  const [locations, setLocations] = useState([1, 2, 3])
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
          <View
            className={`flex-row justify-end items-center rounded-full ${
              showSearch ? 'bg-primaryGreen' : 'transparent'
            }`}
          >
            {/* Search Field */}
            {showSearch ? (
              <TextInput
                placeholder='Search City'
                placeholderTextColor={'lightgray'}
                className='pl-5 h-10 flex-1 text-base text-white'
              />
            ) : null}
            {/* Search Button */}
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              className='m-1 p-3 rounded-full bg-slate-400 transp'
            >
              <MagnifyingGlassIcon size={25} color='white' />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className=' absolute w-full bg-gray-300 rounded-3xl top-16'>
              {locations.map((location, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    className='flex-row items-center px-4 py-3 mx-1'
                  >
                    <MapPinIcon size={25} color='gray' />
                    <Text className='text-base'>Kilinochchi, Sri Lanka</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
