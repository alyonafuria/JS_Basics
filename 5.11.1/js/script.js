let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

for (rapper of newSchool) {
  console.log(newSchool[0][0].concat(newSchool[1][0]));
}

for (producer of newSchool) {
console.log(newSchool[0][1].concat(newSchool[1][1]));
}