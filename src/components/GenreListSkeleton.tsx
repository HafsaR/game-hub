import { HStack, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <HStack>
      <SkeletonCircle />
      <Text>
        <SkeletonText height={"lg"} />
      </Text>
    </HStack>
  );
}

export default GenreListSkeleton;
