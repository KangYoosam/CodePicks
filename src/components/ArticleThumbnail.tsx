import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import ThumbnailCard from './ThumbnailCard'

type Props = {
  navigation: any
  article: any
}
class ArticleThumbnail extends Component<Props> {
  onPressItem() {
    const { navigation, article } = this.props

    navigation.navigate('BridgeView', {
      article,
    })
  }

  render() {
    const { article } = this.props
    const {
      title, image, source, created_at,
    } = article
    const downsideTitle = `${source} | ${created_at}`

    return (
      <ThumbnailCard
        title={title}
        downsideTitle={downsideTitle}
        image={image}
        onPressItem={() => this.onPressItem()}
      />
    )
  }
}

export default withNavigation(ArticleThumbnail)