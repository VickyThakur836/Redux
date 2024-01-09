import React from "react";
import { Component } from "react";
import {View,Text, TextInput, TouchableOpacity, FlatList, ScrollView} from "react-native";
import { style } from "../functionComponent/ExternalStyle";
import { AddUser, DeleteUser, GetUser } from "./ActionCreater";
import { connect } from "react-redux";
import { RadioButton } from "react-native-paper";
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            age:0,
            address:"",
            gender:"Male"
        }
    }
    render(){
        // console.log("All Users:",this.props.users)
        const obj = {
           // id:Math.random(),
            id:Math.floor(Math.random() * 100) + 1,
            name:this.state.name,
            age:this.state.age,
            address:this.state.address,
            gender:this.state.gender
        }
        // console.log(this.props.users)
        return(
        <View style={{flex:1}}>
            <TextInput 
            placeholderTextColor={"black"}
            placeholder="Enter Name "
            style={style.form}
            onChangeText={(event)=>
                this.setState({name:event})
            }
            />
            <TextInput
            placeholderTextColor={"black"}
            placeholder="Enter Age"
            keyboardType="numeric"
            style={style.form}
            onChangeText={(event)=>
                this.setState({age:event})
            }
            />
            <TextInput
            placeholderTextColor={"black"}
            placeholder="Enter Address "
            style={style.form}
            onChangeText={(event)=>
                this.setState({address:event})}
            />
            <View style={{...style.form,justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:23,fontWeight:"bold",color:"black"}}>Gender : </Text>
                    <RadioButton
                    color="red"
                    onPress={()=>this.setState({gender:"Male"})}
                    value="Male"
                    status={this.state.gender == "Male" ? "checked":"unchecked"}
                    />
                    <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Male</Text>
                    <RadioButton
                    color="red"
                    onPress={()=>this.setState({gender:"Female"})}
                    value="Female"
                    status={this.state.gender == "Female" ? "checked":"unchecked"}
                    />
                    <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Female</Text>
                    <RadioButton
                    color="red"
                    onPress={()=>this.setState({gender:"Others"})}
                    value="Others"
                    status={this.state.gender == "Others" ? "checked":"unchecked"}
                    />
                    <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Others </Text>
                </View>
            <TouchableOpacity
            onPress={()=>{
                console.log("All Users:",this.props.users)
                this.props.AddUser(obj)
            }}
            // onPress={()=>{this.props.AddUser({
            //     name:this.state.name,
            //     age:this.state.age,
            //     address:this.state.address,
            //     gender:this.state.gender
            // })
            // console.log("Users :",this.props.users)
            // }}
            >
                <Text style={style.pList2}>AddUser</Text>
            </TouchableOpacity>
            <FlatList
            data={this.props.users}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
                return(
                    <View style={{borderBottomColor:"black",borderWidth:2}}>
                <Text style={style.pList}>
                    ID :{item.id}
                </Text>      
                <Text style={style.pList}>
                    Name :{item.name}
                </Text>
                <Text style={style.pList}>
                    Age :{item.age}
                </Text>
                <Text style={style.pList}>
                    Address :{item.address}
                </Text>
                <Text style={style.pList}>
                    Gender :{item.gender}
                </Text>

                <TouchableOpacity
                onPress={()=>this.props.DeleteUser(item.id)}
                >
                    <Text style={style.deleteBtn}>Delete </Text>
                </TouchableOpacity>
            </View>
                )
            }}
            />     
        </View>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        GetUser:()=>dispatch(GetUser()),
        AddUser:(user)=>dispatch(AddUser(user)),
        DeleteUser:(user)=>dispatch(DeleteUser(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)