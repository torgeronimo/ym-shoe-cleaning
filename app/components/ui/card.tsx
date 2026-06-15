type CardProps={
    name:string;
    tag:string;
    price:string | number;
    includes:string[];
    free?:string;
    

}

const Card=({name, tag, price,free, includes}:CardProps) => {
    return (
        <div key={name} className="price-card col-span-1 w-92 h-50">
            <span className={`${tag} badge badge-outline`}>{tag}</span>
            <div className="flex items-center justify-between pt-4">
                <h2 className="price-amount">{name}</h2>
                <p className="price-amount">{price}</p>
            </div>
            <ul className="price-feature-list">
            {includes.map((include) => (
                <li key={include} className="price-feature-list type-body-base">
                    {include}
                </li>
            ))}
            </ul>
            {free && (
                <p className="type-label-sm text-gray-500">{free}</p>
            )}
        </div>
    )
}



export default Card
