import React from "react";

const Info: React.FC = () => {
    return( 
        <section className="hotel-stats-container">
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-number">101</div>
                    <div className="stat-label">НОМЕР</div>
                </div>
        
                <div className="stat-item">
                    <div className="stat-number">3</div>
                    <div className="stat-label">БОЛЬШИХ ДОМА</div>
                </div>
        
                <div className="stat-item">
                    <div className="stat-number">20</div>
                    <div className="stat-label">НОМЕРА ЛЮКС</div>
                </div>
            </div>
      
            <div className="hotel-description">
                <p>
                    Отель "Эльбрус-Плаза" за годы работы удостоен 20 международных, 
                    30 европейских и 50 российских наград в сфере гостеприимства. 
                    Мы гордимся высоким уровнем сервиса и создаем для гостей 
                    незабываемые впечатления. "Эльбрус-Плаза" — это место, 
                    где отдых становится настоящим удовольствием.
                </p>
            </div>
        </section>
    );
};

export default Info;