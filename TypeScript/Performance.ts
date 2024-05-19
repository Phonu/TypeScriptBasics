/**
==================================== PERFORMANCE ==================================================

SCROLL VIEW
- Within the context of performance, it is typically better to use FlatList over the scroll view due
  to Flatlist's virtualization layer to render child component lazily.
- ScrollView component render all of its child component all at once because of this performance is
  getting worse

FLATLIST
- Required props (data and renderItem) but it won't provide fully optimized solution.
- utilize other props for better app fludity (FPS), CPU utilization and memory usage
    - getItemLayout
    - windowSize
    - initialNumToRender
    - memoization to child components (using nested Flatlist)
    - Use keyExtractor or key

- Avoid anonymous function on renderItem and use useCallBack functions
      const renderItem = useCallback(({item}) => (
        <View key={item.key}>
            <Text>{item.title}</Text>
        </View>
      ), []);

      return (
        // ...

        <FlatList data={items} renderItem={renderItem} />;
        // ...
      );




*/
