import Header from '@/components/Base/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
