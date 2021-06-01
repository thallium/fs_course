const Filter=({filterName, setFilterName}) => {
  return (
  <input value={filterName}
    onChange={(event) => setFilterName(event.target.value)}
  />
  )
}

export default Filter
