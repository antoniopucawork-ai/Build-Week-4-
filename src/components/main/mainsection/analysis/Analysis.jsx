import {
  ChartNoAxesColumn,
  Eye,
  Search,
  Users,
  ArrowRight,
} from "lucide-react";
const Analysis = () => {
  return (
    <div className="bg-white rounded-3 border pt-2">
      <div className="pe-1 ps-1">
        <div className="p-4 ps-3 pb-0">
          <h6 className="mb-0 fw-semibold mb-1">Analisi</h6>

          <div className="text-muted lh-1 small d-flex gap-1">
            <Eye size={16} />
            <p>Visibile solo a te</p>
          </div>
        </div>

        <div className="rounded-3 p-2 me-2 ms-2">
          <div className="d-flex flex-column flex-md-row gap-4">
            <div className="d-flex align-items-start gap-3 flex-fill">
              <Users size={25} />

              <div>
                <p className="fw-semibold mb-1">
                  13 visualizzazioni del profilo
                </p>
                <p className="mb-0">Scopri chi ha visitato il tuo profilo</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 flex-fill">
              <ChartNoAxesColumn size={25} />

              <div>
                <p className="fw-semibold mb-1">26 impressioni dei post</p>
                <p className="mb-0">
                  Scopri chi sta interagendo con i tuoi post.
                </p>
                <p className="mb-0 text-muted">Ultimi 7 giorni</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 flex-fill">
              <Search size={25} />

              <div>
                <p className="fw-semibold mb-1">7 comparse nelle ricerche</p>
                <p className="mb-0">
                  Vedi quante volte il tuo profilo è comparso nei risultati di
                  ricerca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top mt-4">
        <button className="btn showAllBtn">
          Mostra tutto
          <ArrowRight size={16} className="ms-1" />
        </button>
      </div>
    </div>
  );
};

export default Analysis;
