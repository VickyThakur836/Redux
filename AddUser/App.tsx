import { View } from "react-native"
import Home from "./controller/ReduxAssignment/Home"
import { Provider } from "react-redux";
import { StoreAssign } from "./controller/ReduxAssignment/Store";

const App =()=>{
    return(
        <View style={{flex:1}}>
            <Provider store={StoreAssign}>
            <Home/>
            </Provider>
        </View>
    )
}
export default App;