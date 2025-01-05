import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class NetworkCall extends Component {
    fetchCall(url:string){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.json())
            .then(json => {
                // console.log("JOSON+++>",json)
                return resolve((JSON.stringify(json)))
            })
            .catch(error => {
                return reject(error)
            })
        })
    }
     componentDidMount=async()=>{
            console.log("======>>>>>>>")
            const url = "https://fakestoreapi.com/products"
            // const data = await fetch(url)
            // console.log("======>>>>>>>",await data.json())
            // fetch(url)
            //     .then(response => response.json())
            //     .then(json => console.log(json))
            //     .catch(error => console.log(error))
            
            this.fetchCall(url)
            .then(data => console.log("-=====>DATA",data))
        }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>NetworkCall</Text>
                </View>
            </SafeAreaView>
        )
    }
}