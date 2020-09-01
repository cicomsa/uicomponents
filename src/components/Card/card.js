const getStyles = props => {
  const styles = {}
  const {
    centered,
    contentFit,
    width
  } = props

  switch (true) {
    case contentFit === true:
      styles.width = 'fit-content'
    case width !== undefined:
      styles.width = width
    case centered === true:
      styles.margin = '0 auto'
  }

  return styles
}

export default getStyles
