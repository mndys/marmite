import Image from 'next/image'
import Link from 'next/link'

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields
    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width / 20}
                    height={thumbnail.fields.file.details.image.height / 20}
                ></Image>
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approximately {cookingTime} minutes to prepare</p>
                </div>
                <div className="actions">
                    <Link href={`/recipes/${slug}`}>
                        <a>Cook This!</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .card {
                    transform: rotateZ(-1deg);
                }
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                }
                .info p {
                    margin: 0;
                    color: #777;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 24px;
                    text-decoration: none;
                }
            `}</style>

        </div>
    )
}
