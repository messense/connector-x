initSidebarItems({"mod":[["arrow",""],["memory",""]],"trait":[["Consume","A type implemented `Consume<T>` means that it can consume a value `T` by adding it to it’s own buffer."],["Destination","A `Destination` is associated with a `TypeSystem` and a `PartitionDestination`. `PartitionDestination` allows multiple threads write data into the buffer owned by `Destination`."],["DestinationPartition","`PartitionDestination` writes values to its own region. `PartitionDestination` is parameterized on lifetime `'a`, which is the lifetime of the parent `Destination`. This indicates the `PartitionDestination` can never live longer than the parent."]]});