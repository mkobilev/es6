function print(name) {
  const reversed = name.split('').reverse().join('');
  const result = `${reversed[0].toUpperCase()}${reversed.slice(1).toLowerCase()}`;

  return `
Привет! ${name}!
Твое и наоборот "${result}"!
`;
}