import {useEffect} from "react";
import {pexelsPhotoService} from "../../api";

const GridPage = () => {
    useEffect(() => {
        pexelsPhotoService.listPhotos(1, 10);
    }, []);

    return (
        <div className="gridPage">
            Grid Page
        </div>
    )
}

export default GridPage;