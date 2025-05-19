import { Layout, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const layoutStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '100vh',
    padding: '24px',
    backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
    color: '#000',
    lineHeight: '1.5',
    textAlign: 'left', // Добавлено выравнивание по левому краю
};

const priceStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '16px 0px',
    textAlign: 'left', // Добавлено выравнивание по левому краю
};

const SiderBookingForm: React.FC = () => (
    <Layout style={layoutStyle}>
        <Layout.Content style={contentStyle}>
            <Title level={2} style={{ textAlign: 'left' }}>Ваше бронирование</Title>

            <div style={{
                width: '100%',
                height: '10px',
                backgroundColor: 'yourColorHere', // замените на нужный цвет
                display: 'flex',
                alignItems: 'center'
            }}>
                <Title
                    level={4}
                    style={{
                        textAlign: 'left',
                        width: '100%',
                        lineHeight: '10px',
                        fontSize: '25px', // возможно, нужно подобрать размер
                        margin: '10px',
                        padding: 0
                    }}
                >
                    1 ночь
                </Title>
            </div>
            <Text>16 мая — 17 мая</Text><br />
            <Text>Пятница    Суббота</Text><br />
            <Text>С 14:00    ДО 12:00</Text>

            <Divider />

            <Title level={4} style={{ textAlign: 'left' }}>Номер:  6 000 ₽</Title>
            <Text>
                <strong>Стандартный двухместный</strong>
            </Text>

            <Divider />

            <Title level={4} style={{ textAlign: 'left' }}>2 взрослых на основном месте</Title>
            <Text>Тариф с завтраком 2025    6 000 ₽</Text>

            <Divider />

            <Title level={4} style={{ textAlign: 'left' }}>Услуги</Title>
            <Text>Завтрак    Вкл.</Text>

            <Divider />

            <Text style={priceStyle}>6 000 ₽</Text>

        </Layout.Content>
    </Layout>
);

export default SiderBookingForm;