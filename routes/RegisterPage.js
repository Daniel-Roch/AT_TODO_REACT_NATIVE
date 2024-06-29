import { StyleSheet } from 'react-native';
import {useState} from 'react'
import { FormControl, Input, Button, Box, Text, Link, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import routes from './routes.json'
import { LabelWithAsterisk } from '../components/LabelWithAsterisk'
import * as yup from 'yup';
import {Formik} from 'formik';
import { FinishRegister } from '../components/FinishRegister'
import { postTodo } from '../services/todo'

const addTaskSchema = yup.object({
  title: yup
    .string()
    .required("É necessário informar o título")
    .min(4, "O título precisa ter pelo menos 4 caracteres")
    .max(64, "O título pode ter no máximo 64 caracteres"),
  description: yup
    .string()
    .required("É necessário informar a descrição")
    .min(8, "A descrição precisa ter pelo menos 8 caracteres")
    .max(128, "A descrição pode ter no máximo 128 caracteres"),
  step: yup
    .string()
    .matches(/Para fazer|Em andamento|Pronto/,
      'Os passos devem ser "Para fazer", "Em andamento" ou "Pronto"')
})

const addTaskInitValue = {
  title: "",
  description: "",
  step: "Para fazer"

}

const texts = {
  titleAddTasks: "Cadastrar-se",
  titleInput: "Nome",
  titlePlaceHolder: "Informe o nome",
  descriptionInput: "Descrição",
  descriptionPlaceHolder: "Informe a descrição",
  stepInput: 'Etapa',
  stepPlaceHolder: 'Informe a etapa',
  btnForm: "Cadastrar"
}

export function RegisterPage({ navigation }) {
  const [registerFinish, setRegisterFinish] = useState(false)

  function handleTodo(){
    navigation.navigate(routes.todo)
  }

  return (
    <Box paddingTop="10%" flex="1" p="1" gap="2">
        <Text fontSize="3xl" bold textAlign='center'>{texts.titleAddTasks}</Text>
        {
          registerFinish ? 
            <Box>
              <FinishRegister text={"Registro concluído com sucesso"}/>
            </Box>
          :
            <Formik validationSchema={addTaskSchema} initialValues={addTaskInitValue} 
          onSubmit={(values, {resetForm}) => {
            const response = postTodo(values);
            if(response['error']){
              resetForm();
            }else {
              setRegisterFinish(true)
              resetForm();
              setTimeout(()=>{
                setRegisterFinish(false)
                navigation.navigate(routes.todo)
              }, 2000);
            }
            setRegisterFinish(true)
            resetForm();
            setTimeout(()=>{
              setRegisterFinish(false)
              navigation.navigate(routes.todo)
            }, 2000);
        }}>
          {({ values, errors, touched, handleChange, handleSubmit })=> (
            <>
              <FormControl style={styles.inputAddTasks} isInvalid={errors.title && touched.title}>
                <LabelWithAsterisk text={texts.titleInput} isInvalid={errors.title && touched.title}/>
                <Input
                  style={styles.input}
                  onChangeText={handleChange('title')}
                  value={values.title}
                  placeholder={texts.titlePlaceHolder}
                />
                <FormControl.ErrorMessage>{errors.title}</FormControl.ErrorMessage>
              </FormControl>
        
              <FormControl style={styles.inputAddTasks} isInvalid={errors.description && touched.description}>
                <LabelWithAsterisk text={texts.descriptionInput} isInvalid={errors.description && touched.description}/>
                <Input
                  style={styles.input}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  placeholder={texts.descriptionPlaceHolder}
                />
                <FormControl.ErrorMessage>{errors.description}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl style={styles.inputAddTasks} isInvalid={errors.step && touched.step}>
                <LabelWithAsterisk text={texts.stepInput} isInvalid={errors.step && touched.step}/>
                  <Select 
                    selectedValue={values.step} 
                    onValueChange={handleChange('step')}
                    placeholder={texts.stepPlaceHolder}
                  >
                    <Select.Item label="Para fazer" value="Para fazer"/>
                    <Select.Item label="Em andamento" value="Em andamento" />
                    <Select.Item label="Pronto" value="Pronto" />
                  </Select>
                <FormControl.ErrorMessage>{errors.step}</FormControl.ErrorMessage>
              </FormControl>

              <Button onPress={handleSubmit} bg="purple.900">{texts.btnForm}</Button>
            </>
          )}
        </Formik>
        }
        
        <Box>
          <Link onPress={handleTodo}>Voltar ao Todo</Link>
        </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
  },
  inputAddTasks: {

  },
});
