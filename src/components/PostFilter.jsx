import React from "react";
import MyInput from "./Ui/input/MyInput.jsx";
import MySelect from "./Ui/select/MySelect.jsx";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />

      <MySelect
        style={{ alignSelf: "self-start" }}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaulValue={"Sorting"}
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </>
  );
};

export default PostFilter;
