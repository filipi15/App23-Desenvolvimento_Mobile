import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: '#222',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    width: 50,
    height: 50,
    marginLeft: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#c8f0b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endereco: {
    fontSize: 20,
    marginBottom: 8,
  },
});

export { styles };
