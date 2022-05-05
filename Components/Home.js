import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import UserProfile from './UserProfile'
import FilterMenu from './FilterMenu'

const Home = () => {
  return (
    <ScrollView>
      <UserProfile />
      <FilterMenu />
    </ScrollView>
  )
}

export default Home