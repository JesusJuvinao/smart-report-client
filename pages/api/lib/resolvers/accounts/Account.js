'use strict'
export const HelloWord = async (_, { idComp }, ctx) => {
  return 'Hello world! HOLA STUART YA HAGO CONSULTAS  EN GQL ';
}
export default {
  QUERIES: {
    HelloWord
  }
}
