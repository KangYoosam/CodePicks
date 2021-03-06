import React from "react";
import { StyleSheet } from "react-native";
import { withNavigation, NavigationScreenProps } from "react-navigation";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },
  header: {
    marginTop: 0
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  username: {
    fontWeight: "bold",
    fontSize: 16
  },
  createdAt: {
    fontSize: 14
  }
});

type Props = { item: any } & NavigationScreenProps;
const CommentItem = ({ item }: Props) => {
  return (
    <Card style={styles.container}>
      <CardItem style={styles.header}>
        <Left>
          <Thumbnail source={{ uri: item.user.avatar }} style={styles.avatar} />
          <Body>
            <Text style={styles.username}>{item.user.name}</Text>
            <Text note style={styles.createdAt}>
              {item.created_at}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{item.body}</Text>
        </Body>
      </CardItem>
      {/* <CardItem>
          <Left>
            <Button transparent textStyle={{ color: '#87838B' }}>
              いいね！ボタンを実装する予定です。PRお待ちしてます！
            </Button>
          </Left>
        </CardItem> */}
    </Card>
  );
};

export default withNavigation(CommentItem);
