const promiseParaFazerAlgumaCoisa = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
    })
  }
  
  const assistirAlguemFazendoAlgumaCoisa = async () => {
    const something = await promiseParaFazerAlgumaCoisa()
    return something + '\n e Eu vi você fazendo'
  }
  
  const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
    const something = await assistirAlguemFazendoAlgumaCoisa()
    return something + '\n e Eu também vi você vendo ele fazendo'
  }
  
  AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
    console.log(res)
  })