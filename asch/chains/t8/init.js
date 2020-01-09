module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1000, 'domain.register')
  app.registerContract(1001, 'domain.set_ip')

  app.registerContract(2000,'data2chain.postArticle')
  app.registerContract(2001,'data2chain.postComment')
  app.registerContract(2002,'data2chain.postReturnVisit')
  app.registerContract(2005,'data2chain.reward')
  app.registerContract(2003,'data2chain.postAVotes')
  app.registerContract(2004,'data2chain.postCVotes')
  app.setDefaultFee('0','TTT')
  app.registerFee(2000,'0')
  app.registerFee(2001,'0')
  app.registerFee(2002,'0')
  app.registerFee(2005,'0')


  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
