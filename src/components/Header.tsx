type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className='bg-info text-light p-3'>
            <h1>{title}</h1>

        </div>
    )
}

export default Header