import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { decrement, increment, decrementByvalue } from './redux/StopWatchSlicer'
import { useDispatch, useSelector } from 'react-redux'
import CreateContext from './context/CreateContex'

export default function StopWatch() {
    // const [value, setValue] = useState<number>(0)
    // const dispatch = useDispatch()
    // const { value } = useSelector((state: any) => state.counter)
    // console.log(value)
    // const incrementFunction = () => {
    //     setValue(prev => prev + 1)
    // }
    // const decrementFunction = () => {
    //     if (value <= 0) {
    //         return true
    //     }
    //     setValue(prev => prev - 1)
    // }
    // const decrementFunctionByValue = () => {
    //     if (value <= 0) {
    //         return true
    //     }
    //     setValue(prev => prev - 5)
    // }
    return (
        <CreateContext.Consumer>
            {(value:any) => {
                const {count,incrementFunction,decrementFunction,decreaseByValue} = value
                return (
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ alignSelf: "center", gap: 10 }}>
                            <Text>StopWatch</Text>
                            <Text>{count}</Text>
                            {/* <Text>{value}</Text> */}
                            <TouchableOpacity style={{ backgroundColor: "green", justifyContent: "center", alignItems: "center" }} onPress={incrementFunction}>
                                <Text style={{ fontSize: 15, color: "#FFFFFF", padding: 10 }}>Increment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center" }} onPress={decrementFunction}>
                                <Text style={{ fontSize: 15, color: "#FFFFFF", padding: 10 }}>Decrement</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center" }} onPress={()=>decreaseByValue(5)}>
                                <Text style={{ fontSize: 15, color: "#FFFFFF", padding: 10 }}>Decrement by 5</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )
            }}
        </CreateContext.Consumer>
    )
}