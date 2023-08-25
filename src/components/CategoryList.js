import { Button } from "@mui/material";

function CategoryList({category}) {
    return <div>
       {category.map((i) => (
            <Button>{i}</Button>
       ))}
    </div>;
}

export default CategoryList;