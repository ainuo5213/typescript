type Label = {
  label: string
}
function printLabel(labelObj: Label): void {
  console.log(labelObj.label)
}

let label = {
  size: 10,
  label: 'Size 10 Object'
};

printLabel(label);
