import { useRouter } from "next/router";

export default function ProductDetails(){
    
       const router = useRouter();
       const {id} = router.query;

        return(<>
          <h1>Product Details - {id}</h1>
        </>)
}