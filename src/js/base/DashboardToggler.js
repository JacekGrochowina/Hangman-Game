import {
    DASHBOARD,
    DASHBOARD_OPEN_BTN,
    DASHBOARD_CLOSE_BTN,
} from './elements';

class DashboardToggler {
    constructor() {
        this.hidden = true;
        this.dashboard = DASHBOARD;
        this.open = DASHBOARD_OPEN_BTN;
        this.close = DASHBOARD_CLOSE_BTN;
    }

    init() {
        this._setClass();
        this.close.addEventListener('click', () => this._toggle());
        this.open.addEventListener('click', () => this._toggle());
    }

    _toggle() {
        this.hidden = !this.hidden;
        this._setClass();
    }

    _setClass() {
        if (this.hidden) {
            this.dashboard.classList.add('hidden');
            return;
        }
        this.dashboard.classList.remove('hidden');
    }
}

export const dashboardToggler = new DashboardToggler();
