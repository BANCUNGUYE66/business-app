import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import { collection, query, limit, getDocs } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import PopularBusinessCard from './PopularBusinessCard';

export default function PopularBusiness() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    const q = query(collection(db, 'BusinessList'), limit(10));
    const querySnapshot = await getDocs(q);

    const businesses = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      businesses.push(doc.data());
    });
    setBusinessList(businesses);
  };

  return (
    <View>
      <View style={{
        paddingLeft: 20,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold',
        }}>
          Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: 'outfit-medium' }}>View All</Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PopularBusinessCard
          key={index}
          business={item}
          />
        )}
      />
    </View>
  );
}
