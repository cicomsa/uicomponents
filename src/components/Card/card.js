const getStyles = props => {
  const styles = {}
  const {
    centered,
    contentFit,
    width
  } = props

  console.log(centered === true)

  switch (true) {
    case contentFit === true:
      styles.width = 'fit-content'
      break
    case width !== undefined && centered === true:
      styles.width = width
      styles.margin = '0 auto'
      break
    case width !== undefined:
      styles.width = width
      break
    default:
      return styles
  }

  return styles
}

export default getStyles
