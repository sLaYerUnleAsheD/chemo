const sBlock = [
  { symbol: "H", atomicNumber: 1, block: "s" },
  { symbol: "He", atomicNumber: 2, block: "s" },
  { symbol: "Li", atomicNumber: 3, block: "s" },
  { symbol: "Be", atomicNumber: 4, block: "s" },
  { symbol: "Na", atomicNumber: 11, block: "s" },
  { symbol: "Mg", atomicNumber: 12, block: "s" },
  { symbol: "K", atomicNumber: 19, block: "s" },
  { symbol: "Ca", atomicNumber: 20, block: "s" },
  { symbol: "Rb", atomicNumber: 37, block: "s" },
  { symbol: "Sr", atomicNumber: 38, block: "s" },
  { symbol: "Cs", atomicNumber: 55, block: "s" },
  { symbol: "Ba", atomicNumber: 56, block: "s" },
  { symbol: "Fr", atomicNumber: 87, block: "s" },
  { symbol: "Ra", atomicNumber: 88, block: "s" },
];

// ///////////////////////////////////////////// p block /////////////////////////////////////////////////

const pBlock = [
  { symbol: "B", atomicNumber: 5, block: "p" },
  { symbol: "C", atomicNumber: 6, block: "p" },
  { symbol: "N", atomicNumber: 7, block: "p" },
  { symbol: "O", atomicNumber: 8, block: "p" },
  { symbol: "F", atomicNumber: 9, block: "p" },
  { symbol: "Ne", atomicNumber: 10, block: "p" },
  { symbol: "Al", atomicNumber: 13, block: "p" },
  { symbol: "Si", atomicNumber: 14, block: "p" },
  { symbol: "P", atomicNumber: 15, block: "p" },
  { symbol: "S", atomicNumber: 16, block: "p" },
  { symbol: "Cl", atomicNumber: 17, block: "p" },
  { symbol: "Ar", atomicNumber: 18, block: "p" },
  { symbol: "Ga", atomicNumber: 31, block: "p" },
  { symbol: "Ge", atomicNumber: 32, block: "p" },
  { symbol: "As", atomicNumber: 33, block: "p" },
  { symbol: "Se", atomicNumber: 34, block: "p" },
  { symbol: "Br", atomicNumber: 35, block: "p" },
  { symbol: "Kr", atomicNumber: 36, block: "p" },
  { symbol: "In", atomicNumber: 49, block: "p" },
  { symbol: "Sn", atomicNumber: 50, block: "p" },
  { symbol: "Sb", atomicNumber: 51, block: "p" },
  { symbol: "Te", atomicNumber: 52, block: "p" },
  { symbol: "I", atomicNumber: 53, block: "p" },
  { symbol: "Xe", atomicNumber: 54, block: "p" },
  { symbol: "Tl", atomicNumber: 81, block: "p" },
  { symbol: "Pb", atomicNumber: 82, block: "p" },
  { symbol: "Bi", atomicNumber: 83, block: "p" },
  { symbol: "Po", atomicNumber: 84, block: "p" },
  { symbol: "At", atomicNumber: 85, block: "p" },
  { symbol: "Rn", atomicNumber: 86, block: "p" },
  { symbol: "Nh", atomicNumber: 113, block: "p" },
  { symbol: "Fl", atomicNumber: 114, block: "p" },
  { symbol: "Mc", atomicNumber: 115, block: "p" },
  { symbol: "Lv", atomicNumber: 116, block: "p" },
  { symbol: "Ts", atomicNumber: 117, block: "p" },
  { symbol: "Og", atomicNumber: 118, block: "p" },
];

// ///////////////////////////////////////////// d block /////////////////////////////////////////////////

const dBlock = [
  { symbol: "Sc", atomicNumber: 21, block: "d" },
  { symbol: "Ti", atomicNumber: 22, block: "d" },
  { symbol: "V", atomicNumber: 23, block: "d" },
  { symbol: "Cr", atomicNumber: 24, block: "d" },
  { symbol: "Mn", atomicNumber: 25, block: "d" },
  { symbol: "Fe", atomicNumber: 26, block: "d" },
  { symbol: "Co", atomicNumber: 27, block: "d" },
  { symbol: "Ni", atomicNumber: 28, block: "d" },
  { symbol: "Cu", atomicNumber: 29, block: "d" },
  { symbol: "Zn", atomicNumber: 30, block: "d" },
  { symbol: "Y", atomicNumber: 39, block: "d" },
  { symbol: "Zr", atomicNumber: 40, block: "d" },
  { symbol: "Nb", atomicNumber: 41, block: "d" },
  { symbol: "Mo", atomicNumber: 42, block: "d" },
  { symbol: "Tc", atomicNumber: 43, block: "d" },
  { symbol: "Ru", atomicNumber: 44, block: "d" },
  { symbol: "Rh", atomicNumber: 45, block: "d" },
  { symbol: "Pd", atomicNumber: 46, block: "d" },
  { symbol: "Ag", atomicNumber: 47, block: "d" },
  { symbol: "Cd", atomicNumber: 48, block: "d" },
  { symbol: "Hf", atomicNumber: 72, block: "d" },
  { symbol: "Ta", atomicNumber: 73, block: "d" },
  { symbol: "W", atomicNumber: 74, block: "d" },
  { symbol: "Re", atomicNumber: 75, block: "d" },
  { symbol: "Os", atomicNumber: 76, block: "d" },
  { symbol: "Ir", atomicNumber: 77, block: "d" },
  { symbol: "Pt", atomicNumber: 78, block: "d" },
  { symbol: "Au", atomicNumber: 79, block: "d" },
  { symbol: "Hg", atomicNumber: 80, block: "d" },
  { symbol: "Rf", atomicNumber: 104, block: "d" },
  { symbol: "Db", atomicNumber: 105, block: "d" },
  { symbol: "Sg", atomicNumber: 106, block: "d" },
  { symbol: "Bh", atomicNumber: 107, block: "d" },
  { symbol: "Hs", atomicNumber: 108, block: "d" },
  { symbol: "Mt", atomicNumber: 109, block: "d" },
  { symbol: "Ds", atomicNumber: 110, block: "d" },
  { symbol: "Rg", atomicNumber: 111, block: "d" },
  { symbol: "Cn", atomicNumber: 112, block: "d" },
];
// ///////////////////////////////////////////// f block /////////////////////////////////////////////////
const fBlock = [
  { symbol: "La", atomicNumber: 57, block: "f" },
  { symbol: "Ce", atomicNumber: 58, block: "f" },
  { symbol: "Pr", atomicNumber: 59, block: "f" },
  { symbol: "Nd", atomicNumber: 60, block: "f" },
  { symbol: "Pm", atomicNumber: 61, block: "f" },
  { symbol: "Sm", atomicNumber: 62, block: "f" },
  { symbol: "Eu", atomicNumber: 63, block: "f" },
  { symbol: "Gd", atomicNumber: 64, block: "f" },
  { symbol: "Tb", atomicNumber: 65, block: "f" },
  { symbol: "Dy", atomicNumber: 66, block: "f" },
  { symbol: "Ho", atomicNumber: 67, block: "f" },
  { symbol: "Er", atomicNumber: 68, block: "f" },
  { symbol: "Tm", atomicNumber: 69, block: "f" },
  { symbol: "Yb", atomicNumber: 70, block: "f" },
  { symbol: "Lu", atomicNumber: 71, block: "f" },
  { symbol: "Ac", atomicNumber: 89, block: "f" },
  { symbol: "Th", atomicNumber: 90, block: "f" },
  { symbol: "Pa", atomicNumber: 91, block: "f" },
  { symbol: "U", atomicNumber: 92, block: "f" },
  { symbol: "Np", atomicNumber: 93, block: "f" },
  { symbol: "Pu", atomicNumber: 94, block: "f" },
  { symbol: "Am", atomicNumber: 95, block: "f" },
  { symbol: "Cm", atomicNumber: 96, block: "f" },
  { symbol: "Bk", atomicNumber: 97, block: "f" },
  { symbol: "Cf", atomicNumber: 98, block: "f" },
  { symbol: "Es", atomicNumber: 99, block: "f" },
  { symbol: "Fm", atomicNumber: 100, block: "f" },
  { symbol: "Md", atomicNumber: 101, block: "f" },
  { symbol: "No", atomicNumber: 102, block: "f" },
  { symbol: "Lr", atomicNumber: 103, block: "f" },
];

module.exports = { sBlock, pBlock, dBlock, fBlock };
