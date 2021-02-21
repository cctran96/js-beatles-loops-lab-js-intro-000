function theBeatlesPlay(musicians, instruments) {
  let play = []
  for (let i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}
