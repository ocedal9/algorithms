let i = 0
function log1() {
  console.log(++i)
}
function log10() {
  log1()
  log1()
  log1()
  log1()
  log1()
  log1()
  log1()
  log1()
  log1()
  log1()
}
function log100() {
  log10()
  log10()
  log10()
  log10()
  log10()
  log10()
  log10()
  log10()
  log10()
  log10()
}
log100()
