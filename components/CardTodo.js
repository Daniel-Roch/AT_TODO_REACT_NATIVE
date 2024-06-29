import { StyleSheet } from "react-native";
import { Text, Box, Button, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const CardTodo = ({ data, onPressLeft, onPressRight, onPressEdit, onPressDelete }) => {
  const verifyStepLeft = data.step == "Para fazer";
  const verifyStepRight = data.step == "Pronto";

  return (
    <Box style={styles.card}>
      <Text style={styles.textId}>#{data.id}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Box style={styles.footer}>
        <HStack style={styles.boxBtnOptions} space={4} justifyContent="center">
          <Button style={[styles.btnOptionArrow, verifyStepLeft && styles.disabledButton]} disabled={verifyStepLeft} onPress={onPressLeft}>
            <AntDesign name="arrowleft" color="black" />
          </Button>
          <Button style={[styles.btnOptionArrow, verifyStepRight && styles.disabledButton]} disabled={verifyStepRight} onPress={onPressRight}>
            <AntDesign name="arrowright" color="black" />
          </Button>
          <Button style={styles.btnOptionEdit} onPress={onPressEdit}>
            Editar
          </Button>
          <Button style={styles.btnOptionDelete} onPress={onPressDelete}>
            Deletar
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    flex: 1,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textId: {
    fontSize: 12,
    color: "#555",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 11,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxBtnOptions: {
    flexDirection: "row",
    gap: 2,
  },
  btnOptionArrow : {
    backgroundColor: 'rgb(209, 213, 219)',
  },
  btnOptionEdit : {
    backgroundColor: 'rgb(88, 28, 135)',
  },
  btnOptionDelete : {
    backgroundColor: 'rgb(220, 38, 38)',
  },
  disabledButton: {
    opacity: 0.5,
  }
});
