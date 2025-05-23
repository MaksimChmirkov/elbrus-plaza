import { Layout, Form, Input, Button, Select, Row, Col } from 'antd';

const { Content } = Layout;
const { Option } = Select;

const contentStyle: React.CSSProperties = {
    padding: '24px',
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: '#f0f2f5',
    marginLeft: '150px'
};

const bookButtonStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#142840', // Основной цвет кнопки
  color: '#fff', // Белый текст
  borderColor: '#142840',
  height: '40px',
  fontSize: '16px',
};

const bookButtonHoverStyle: React.CSSProperties = {
  backgroundColor: '#E3D9D4', // Цвет при наведении
  color: '#000', // Черный текст при наведении
  borderColor: '#E3D9D4',
};

const ContentBookingForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Layout>
            <Content style={contentStyle}>
                <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '24px', borderRadius: '8px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Введите данные гостей</h2>

                    <Form form={form} onFinish={onFinish} layout="vertical">
                        {/* Гость 1 */}
                        <h3 style={{ marginBottom: '16px' }}>Гость 1</h3>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest1', 'lastName']}
                                    rules={[{ required: true, message: 'Пожалуйста, введите фамилию' }]}
                                >
                                    <Input placeholder="Введите фамилию" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest1', 'firstName']}
                                    rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
                                >
                                    <Input placeholder="Введите имя" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest1', 'middleName']}
                                >
                                    <Input placeholder="Введите отчество" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest1', 'email']}
                                    rules={[{ type: 'email', message: 'Неверный формат email' }]}
                                >
                                    <Input placeholder="Введите email" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name={['guest1', 'phone']}
                            style={{ maxWidth: '50%' }}
                        >
                            <Input placeholder="Введите номер телефона" />
                        </Form.Item>

                        {/* Гость 2 */}
                        <h3 style={{ marginTop: '24px', marginBottom: '16px' }}>Гость 2</h3>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest2', 'lastName']}
                                >
                                    <Input placeholder="Введите фамилию" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest2', 'firstName']}
                                >
                                    <Input placeholder="Введите имя" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest2', 'middleName']}
                                >
                                    <Input placeholder="Введите отчество" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={['guest2', 'email']}
                                    rules={[{ type: 'email', message: 'Неверный формат email' }]}
                                >
                                    <Input placeholder="Введите email" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name={['guest2', 'phone']}
                            style={{ maxWidth: '50%' }}
                        >
                            <Input placeholder="Введите номер телефона" />
                        </Form.Item>

                        {/* Способ оплаты и кнопка в одной строке */}
                        <h3 style={{ marginTop: '24px', marginBottom: '16px' }}>Способ оплаты</h3>
                        <Row gutter={16} align="middle">
                            <Col span={12}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Пожалуйста, выберите способ оплаты' }]}
                                >
                                    <Select placeholder="Выберите способ оплаты" defaultValue="card">
                                        <Option value="card">Банковская карта</Option>
                                        <Option value="cash">Наличные</Option>
                                        <Option value="transfer">Банковский перевод</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={bookButtonStyle}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = bookButtonHoverStyle.backgroundColor || '';
                                            e.currentTarget.style.color = bookButtonHoverStyle.color || '';
                                            e.currentTarget.style.borderColor = bookButtonHoverStyle.borderColor || '';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = bookButtonStyle.backgroundColor || '';
                                            e.currentTarget.style.color = bookButtonStyle.color || '';
                                            e.currentTarget.style.borderColor = bookButtonStyle.borderColor || '';
                                        }}
                                    >
                                        Забронировать
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default ContentBookingForm;