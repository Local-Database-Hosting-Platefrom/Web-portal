import Heading from "./Heading"

const CustomTableLoadingForm=(msg="Loading please wait..!!",fontSize="1rem",img_width="200",img_height="200",img="/no_data_found.jpg",loadingGif="https://i.postimg.cc/9FBhSDMk/output-onlinegiftools.gif",gif_width="200",gif_height="200")=>
{
    emptyText: (
        <span>
          <img src={img} width={img_width} height={img_height} />
          <Heading text={msg} fontSize={fontSize} />
        </span>
    )
}

export default CustomTableLoadingForm