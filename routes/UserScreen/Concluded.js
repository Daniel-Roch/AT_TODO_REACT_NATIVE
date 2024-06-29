import { useState, useEffect } from 'react'
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardTodo } from "../../components/CardTodo"
import { getTodo, deleteTodo, patchTodoId } from '../../services/todo'
import { LoadingCard } from '../../components/LoadingCard'
import routes from '../routes.json';
import steps from '../../comuns/steps.json'

export function Concluded({route, navigation}) {
  const [cardConcluded, setCardConcluded] = useState([])
  const [load, setLoad] = useState(false)

  const axioData = async () =>{
    const datas = await getTodo();
    const filterDatas = [...datas].filter((task) => task.step === "Pronto");
    setCardConcluded(filterDatas)
  }

  const handleDelete = async (id) =>{
    setLoad(true)
    try {
      const response = await deleteTodo(id)
      if (response.status == 200){
        axioData()
      }
    }catch(error){
      alert(error)
    }finally {
      setLoad(false)
    }
  }

  const handleEdit = async (id) => {
    navigation.navigate(routes.modific, {id, backRoute: route.name})
  }

  const handlePressLeft = async (id) => {
    await patchTodoId(id, steps.inProgress)
    axioData()
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', axioData)
    return unsubscribe
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {cardConcluded.length > 0 ? (
        load ? 
          <LoadingCard/>
        :
        <FlatList
          data={cardConcluded}
          renderItem={({ item }) => <CardTodo 
                                      data={item}
                                      onPressLeft={()=> handlePressLeft(item.id)}
                                      onPressEdit={()=> handleEdit(item.id)} 
                                      onPressDelete={()=> handleDelete(item.id)}
                                    />}
        />
      ) : (
        <Text>Sem nenhum card...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
