import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string | null) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={search}
          onChange={handleChange}
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        <InputRightElement
          onClick={() => {
            onSearch(null);
            setSearch("");
          }}
          children={<BsX />}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
