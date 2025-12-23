// Database Simulation using localStorage
class CarRentalDB {
    constructor() {
        this.initializeDB();
    }

    initializeDB() {
        if (!localStorage.getItem('carRentalDB')) {
            const initialData = {
                customers: [],
                employees: [],
                cars: [],
                bookings: [],
                rentals: [],
                payments: []
            };

            // Add sample data
            this.addSampleData(initialData);
            localStorage.setItem('carRentalDB', JSON.stringify(initialData));
        }
    }

    addSampleData(db) {
        // Sample Customers
        db.customers = [
            {
                customer_id: 1,
                name: 'Nurma',
                email: 'nurma@gmail.com',
                phone: '9876543210',
                license_no: 'DL12345'
            },
            {
                customer_id: 2,
                name: 'Emre',
                email: 'emre@gmail.com',
                phone: '9876543211',
                license_no: 'DL12346'
            }
        ];

        // Sample Employees (including Ruslan)
        db.employees = [
            {
                employee_id: 1,
                name: 'Aibergen',
                role: 'Manager',
                salary: 50000
            },
            {
                employee_id: 2,
                name: 'Maksat',
                role: 'Agent',
                salary: 30000
            },
            {
                employee_id: 22309322,
                name: 'Ruslan',
                role: 'Sales Manager',
                salary: 3000
            }
        ];

        // Sample Cars
        db.cars = [
            {
                car_id: 1,
                brand: 'Toyota',
                model: 'Innova',
                car_year: 2022,
                price_per_day: 300,
                status: 'AVAILABLE',
                employee_id: 1
            },
            {
                car_id: 2,
                brand: 'Honda',
                model: 'City',
                car_year: 2023,
                price_per_day: 250,
                status: 'AVAILABLE',
                employee_id: 1
            },
            {
                car_id: 3,
                brand: 'Mercedes',
                model: 'E-Class',
                car_year: 2021,
                price_per_day: 800,
                status: 'RENTED',
                employee_id: 22309322  // Assigned to Ruslan
            }
        ];

        // Sample Bookings
        db.bookings = [
            {
                booking_id: 1,
                customer_id: 1,
                car_id: 1,
                start_date: '2025-01-10',
                end_date: '2025-01-15',
                total_cost: 15000
            }
        ];

        // Sample Rentals
        db.rentals = [
            {
                rental_id: 1,
                booking_id: 1,
                pickup_date: '2025-01-10',
                return_date: '2025-01-16',
                late_fee: 1000
            }
        ];

        // Sample Payments
        db.payments = [
            {
                payment_id: 1,
                booking_id: 1,
                amount: 16000,
                payment_date: '2025-01-16',
                payment_method: 'Credit Card'
            }
        ];
    }

    getDB() {
        return JSON.parse(localStorage.getItem('carRentalDB'));
    }

    saveDB(db) {
        localStorage.setItem('carRentalDB', JSON.stringify(db));
    }

    // CRUD Operations for Customers
    getCustomers() {
        return this.getDB().customers;
    }

    addCustomer(customer) {
        const db = this.getDB();
        customer.customer_id = db.customers.length > 0 ?
            Math.max(...db.customers.map(c => c.customer_id)) + 1 : 1;
        db.customers.push(customer);
        this.saveDB(db);
        return customer;
    }

    updateCustomer(id, updates) {
        const db = this.getDB();
        const index = db.customers.findIndex(c => c.customer_id === id);
        if (index !== -1) {
            db.customers[index] = { ...db.customers[index], ...updates };
            this.saveDB(db);
            return true;
        }
        return false;
    }

    deleteCustomer(id) {
        const db = this.getDB();
        const index = db.customers.findIndex(c => c.customer_id === id);
        if (index !== -1) {
            db.customers.splice(index, 1);
            this.saveDB(db);
            return true;
        }
        return false;
    }

    // CRUD Operations for Cars
    getCars() {
        return this.getDB().cars;
    }

    addCar(car) {
        const db = this.getDB();
        car.car_id = db.cars.length > 0 ?
            Math.max(...db.cars.map(c => c.car_id)) + 1 : 1;
        db.cars.push(car);
        this.saveDB(db);
        return car;
    }

    updateCar(id, updates) {
        const db = this.getDB();
        const index = db.cars.findIndex(c => c.car_id === id);
        if (index !== -1) {
            db.cars[index] = { ...db.cars[index], ...updates };
            this.saveDB(db);
            return true;
        }
        return false;
    }

    deleteCar(id) {
        const db = this.getDB();
        const index = db.cars.findIndex(c => c.car_id === id);
        if (index !== -1) {
            db.cars.splice(index, 1);
            this.saveDB(db);
            return true;
        }
        return false;
    }

    // CRUD Operations for Employees
    getEmployees() {
        return this.getDB().employees;
    }

    addEmployee(employee) {
        const db = this.getDB();
        // If employee_id is provided, use it; otherwise generate
        if (!employee.employee_id) {
            employee.employee_id = db.employees.length > 0 ?
                Math.max(...db.employees.map(e => e.employee_id)) + 1 : 1;
        }
        db.employees.push(employee);
        this.saveDB(db);
        return employee;
    }

    updateEmployee(id, updates) {
        const db = this.getDB();
        const index = db.employees.findIndex(e => e.employee_id === id);
        if (index !== -1) {
            db.employees[index] = { ...db.employees[index], ...updates };
            this.saveDB(db);
            return true;
        }
        return false;
    }

    deleteEmployee(id) {
        const db = this.getDB();
        const index = db.employees.findIndex(e => e.employee_id === id);
        if (index !== -1) {
            db.employees.splice(index, 1);
            this.saveDB(db);
            return true;
        }
        return false;
    }

    // CRUD Operations for Bookings
    getBookings() {
        return this.getDB().bookings;
    }

    addBooking(booking) {
        const db = this.getDB();
        booking.booking_id = db.bookings.length > 0 ?
            Math.max(...db.bookings.map(b => b.booking_id)) + 1 : 1;
        db.bookings.push(booking);
        this.saveDB(db);
        return booking;
    }

    // CRUD Operations for Rentals
    getRentals() {
        return this.getDB().rentals;
    }

    addRental(rental) {
        const db = this.getDB();
        rental.rental_id = db.rentals.length > 0 ?
            Math.max(...db.rentals.map(r => r.rental_id)) + 1 : 1;
        db.rentals.push(rental);
        this.saveDB(db);
        return rental;
    }

    // CRUD Operations for Payments
    getPayments() {
        return this.getDB().payments;
    }

    addPayment(payment) {
        const db = this.getDB();
        payment.payment_id = db.payments.length > 0 ?
            Math.max(...db.payments.map(p => p.payment_id)) + 1 : 1;
        db.payments.push(payment);
        this.saveDB(db);
        return payment;
    }

    // SQL Query Execution
    executeSQLQuery(query) {
        const db = this.getDB();

        // Simple SQL query simulation
        if (query.includes('SELECT * FROM Car WHERE status = "AVAILABLE"')) {
            return db.cars.filter(car => car.status === 'AVAILABLE');
        }

        if (query.includes('SELECT DISTINCT c.name FROM Customer')) {
            return db.customers.map(c => ({ name: c.name }));
        }

        if (query.includes('SELECT SUM(amount) AS total_revenue FROM Payment')) {
            const total = db.payments.reduce((sum, p) => sum + p.amount, 0);
            return [{ total_revenue: total }];
        }

        if (query.includes('SELECT * FROM Employee')) {
            return db.employees;
        }

        if (query.includes('SELECT * FROM Employee WHERE role = "Sales Manager"')) {
            return db.employees.filter(emp => emp.role === 'Sales Manager');
        }

        if (query.includes('SELECT * FROM Car WHERE employee_id = 22309322')) {
            return db.cars.filter(car => car.employee_id === 22309322);
        }

        // Add more query patterns as needed

        return { error: 'Query not recognized in simulation mode' };
    }
}

// Initialize database
const db = new CarRentalDB();

// UI Management
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Activate corresponding nav link
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');

    // Load data for the section
    loadSectionData(sectionId);
}

function loadSectionData(sectionId) {
    switch (sectionId) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'cars':
            loadCarsTable();
            break;
        case 'customers':
            loadCustomersTable();
            break;
        case 'bookings':
            loadBookingsTable();
            break;
        case 'rentals':
            loadRentalsTable();
            break;
        case 'payments':
            loadPaymentsTable();
            break;
        case 'employees':
            loadEmployeesTable();
            break;
    }
}

function loadDashboardData() {
    const dbData = db.getDB();

    // Update stats
    document.getElementById('total-cars').textContent = dbData.cars.length;
    document.getElementById('total-customers').textContent = dbData.customers.length;

    const activeBookings = dbData.bookings.filter(b => {
        const endDate = new Date(b.end_date);
        return endDate >= new Date();
    }).length;
    document.getElementById('active-bookings').textContent = activeBookings;

    const totalRevenue = dbData.payments.reduce((sum, p) => sum + p.amount, 0);
    document.getElementById('total-revenue').textContent = `$${totalRevenue.toLocaleString()}`;

    // Load recent cars
    const recentCarsList = document.getElementById('recent-cars-list');
    recentCarsList.innerHTML = dbData.cars
        .slice(-3)
        .reverse()
        .map(car => `
            <div class="list-item">
                <strong>${car.brand} ${car.model} (${car.car_year})</strong><br>
                <small>Price: $${car.price_per_day}/day | Status: ${car.status}</small>
            </div>
        `)
        .join('');
}

function loadCarsTable() {
    const cars = db.getCars();
    const tbody = document.getElementById('cars-table-body');

    // Get employees for display
    const employees = db.getEmployees();
    const employeeMap = {};
    employees.forEach(emp => {
        employeeMap[emp.employee_id] = emp.name;
    });

    tbody.innerHTML = cars.map(car => `
        <tr>
            <td>${car.car_id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.car_year}</td>
            <td>$${car.price_per_day}</td>
            <td><span class="status-badge status-${car.status.toLowerCase()}">${car.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editCar(${car.car_id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteCar(${car.car_id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="action-btn view" onclick="viewCar(${car.car_id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadCustomersTable() {
    const customers = db.getCustomers();
    const tbody = document.getElementById('customers-table-body');

    tbody.innerHTML = customers.map(customer => `
        <tr>
            <td>${customer.customer_id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.license_no}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editCustomer(${customer.customer_id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteCustomer(${customer.customer_id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="action-btn view" onclick="viewCustomer(${customer.customer_id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadEmployeesTable() {
    const employees = db.getEmployees();
    const tbody = document.getElementById('employees-table-body');

    tbody.innerHTML = employees.map(employee => `
        <tr>
            <td>${employee.employee_id}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
            <td>$${employee.salary.toLocaleString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editEmployee(${employee.employee_id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteEmployee(${employee.employee_id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="action-btn view" onclick="viewEmployee(${employee.employee_id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadBookingsTable() {
    const bookings = db.getBookings();
    const tbody = document.getElementById('bookings-table-body');

    // Get customers and cars for display
    const customers = db.getCustomers();
    const cars = db.getCars();

    tbody.innerHTML = bookings.map(booking => {
        const customer = customers.find(c => c.customer_id === booking.customer_id);
        const car = cars.find(c => c.car_id === booking.car_id);

        return `
            <tr>
                <td>${booking.booking_id}</td>
                <td>${customer ? customer.name : 'N/A'}</td>
                <td>${car ? `${car.brand} ${car.model}` : 'N/A'}</td>
                <td>${booking.start_date}</td>
                <td>${booking.end_date}</td>
                <td>$${booking.total_cost}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn edit" onclick="editBooking(${booking.booking_id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteBooking(${booking.booking_id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function loadRentalsTable() {
    const rentals = db.getRentals();
    const tbody = document.getElementById('rentals-table-body');

    tbody.innerHTML = rentals.map(rental => `
        <tr>
            <td>${rental.rental_id}</td>
            <td>${rental.booking_id}</td>
            <td>${rental.pickup_date}</td>
            <td>${rental.return_date}</td>
            <td>$${rental.late_fee}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editRental(${rental.rental_id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteRental(${rental.rental_id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadPaymentsTable() {
    const payments = db.getPayments();
    const tbody = document.getElementById('payments-table-body');

    tbody.innerHTML = payments.map(payment => `
        <tr>
            <td>${payment.payment_id}</td>
            <td>${payment.booking_id}</td>
            <td>$${payment.amount}</td>
            <td>${payment.payment_date}</td>
            <td>${payment.payment_method}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editPayment(${payment.payment_id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deletePayment(${payment.payment_id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Modal Functions
function showAddCarModal() {
    const employees = db.getEmployees();

    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-car"></i> Add New Car</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addCarForm" onsubmit="return addCar(event)">
                <div class="form-group">
                    <label for="carBrand">Brand</label>
                    <input type="text" id="carBrand" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="carModel">Model</label>
                    <input type="text" id="carModel" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="carYear">Year</label>
                    <input type="number" id="carYear" class="form-control" min="2000" max="2025" required>
                </div>
                <div class="form-group">
                    <label for="carPrice">Price per Day ($)</label>
                    <input type="number" id="carPrice" class="form-control" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label for="carStatus">Status</label>
                    <select id="carStatus" class="form-control" required>
                        <option value="AVAILABLE">Available</option>
                        <option value="RENTED">Rented</option>
                        <option value="MAINTENANCE">Maintenance</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="employeeId">Assigned Employee</label>
                    <select id="employeeId" class="form-control" required>
                        ${employees.map(emp =>
        `<option value="${emp.employee_id}">${emp.name} (${emp.role})</option>`
    ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Save Car
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';
}

function addCar(event) {
    event.preventDefault();

    const car = {
        brand: document.getElementById('carBrand').value,
        model: document.getElementById('carModel').value,
        car_year: parseInt(document.getElementById('carYear').value),
        price_per_day: parseFloat(document.getElementById('carPrice').value),
        status: document.getElementById('carStatus').value,
        employee_id: parseInt(document.getElementById('employeeId').value)
    };

    db.addCar(car);
    closeModal();
    loadCarsTable();
    loadDashboardData();

    showNotification('Car added successfully!', 'success');
    return false;
}

function editCar(id) {
    const cars = db.getCars();
    const car = cars.find(c => c.car_id === id);
    const employees = db.getEmployees();

    if (car) {
        const modal = document.getElementById('addCarModal');
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-edit"></i> Edit Car</h3>
                    <button class="close-modal" onclick="closeModal()">&times;</button>
                </div>
                <form id="editCarForm" onsubmit="return updateCar(${id}, event)">
                    <div class="form-group">
                        <label for="editCarBrand">Brand</label>
                        <input type="text" id="editCarBrand" class="form-control" value="${car.brand}" required>
                    </div>
                    <div class="form-group">
                        <label for="editCarModel">Model</label>
                        <input type="text" id="editCarModel" class="form-control" value="${car.model}" required>
                    </div>
                    <div class="form-group">
                        <label for="editCarYear">Year</label>
                        <input type="number" id="editCarYear" class="form-control" value="${car.car_year}" min="2000" max="2025" required>
                    </div>
                    <div class="form-group">
                        <label for="editCarPrice">Price per Day ($)</label>
                        <input type="number" id="editCarPrice" class="form-control" value="${car.price_per_day}" min="0" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="editCarStatus">Status</label>
                        <select id="editCarStatus" class="form-control" required>
                            <option value="AVAILABLE" ${car.status === 'AVAILABLE' ? 'selected' : ''}>Available</option>
                            <option value="RENTED" ${car.status === 'RENTED' ? 'selected' : ''}>Rented</option>
                            <option value="MAINTENANCE" ${car.status === 'MAINTENANCE' ? 'selected' : ''}>Maintenance</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editEmployeeId">Assigned Employee</label>
                        <select id="editEmployeeId" class="form-control" required>
                            ${employees.map(emp =>
            `<option value="${emp.employee_id}" ${car.employee_id === emp.employee_id ? 'selected' : ''}>
                                    ${emp.name} (${emp.role})
                                </option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-save"></i> Update Car
                        </button>
                    </div>
                </form>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

function updateCar(id, event) {
    event.preventDefault();

    const updates = {
        brand: document.getElementById('editCarBrand').value,
        model: document.getElementById('editCarModel').value,
        car_year: parseInt(document.getElementById('editCarYear').value),
        price_per_day: parseFloat(document.getElementById('editCarPrice').value),
        status: document.getElementById('editCarStatus').value,
        employee_id: parseInt(document.getElementById('editEmployeeId').value)
    };

    if (db.updateCar(id, updates)) {
        closeModal();
        loadCarsTable();
        loadDashboardData();
        showNotification('Car updated successfully!', 'success');
    } else {
        showNotification('Failed to update car!', 'error');
    }

    return false;
}

function deleteCar(id) {
    if (confirm('Are you sure you want to delete this car?')) {
        if (db.deleteCar(id)) {
            loadCarsTable();
            loadDashboardData();
            showNotification('Car deleted successfully!', 'success');
        } else {
            showNotification('Failed to delete car!', 'error');
        }
    }
}

function viewCar(id) {
    const cars = db.getCars();
    const employees = db.getEmployees();
    const car = cars.find(c => c.car_id === id);

    if (car) {
        const employee = employees.find(e => e.employee_id === car.employee_id);
        alert(
            `Car Details:\n\n` +
            `ID: ${car.car_id}\n` +
            `Brand: ${car.brand}\n` +
            `Model: ${car.model}\n` +
            `Year: ${car.car_year}\n` +
            `Price/Day: $${car.price_per_day}\n` +
            `Status: ${car.status}\n` +
            `Assigned Employee: ${employee ? employee.name : 'N/A'}`
        );
    }
}

function showAddCustomerModal() {
    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-user-plus"></i> Add New Customer</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addCustomerForm" onsubmit="return addCustomer(event)">
                <div class="form-group">
                    <label for="customerName">Full Name</label>
                    <input type="text" id="customerName" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="customerEmail">Email</label>
                    <input type="email" id="customerEmail" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="customerPhone">Phone</label>
                    <input type="tel" id="customerPhone" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="customerLicense">License Number</label>
                    <input type="text" id="customerLicense" class="form-control" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Save Customer
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';
}

function addCustomer(event) {
    event.preventDefault();

    const customer = {
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        license_no: document.getElementById('customerLicense').value
    };

    db.addCustomer(customer);
    closeModal();
    loadCustomersTable();
    loadDashboardData();

    showNotification('Customer added successfully!', 'success');
    return false;
}

function editCustomer(id) {
    const customers = db.getCustomers();
    const customer = customers.find(c => c.customer_id === id);

    if (customer) {
        const modal = document.getElementById('addCarModal');
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-edit"></i> Edit Customer</h3>
                    <button class="close-modal" onclick="closeModal()">&times;</button>
                </div>
                <form id="editCustomerForm" onsubmit="return updateCustomer(${id}, event)">
                    <div class="form-group">
                        <label for="editCustomerName">Full Name</label>
                        <input type="text" id="editCustomerName" class="form-control" value="${customer.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editCustomerEmail">Email</label>
                        <input type="email" id="editCustomerEmail" class="form-control" value="${customer.email}" required>
                    </div>
                    <div class="form-group">
                        <label for="editCustomerPhone">Phone</label>
                        <input type="tel" id="editCustomerPhone" class="form-control" value="${customer.phone}" required>
                    </div>
                    <div class="form-group">
                        <label for="editCustomerLicense">License Number</label>
                        <input type="text" id="editCustomerLicense" class="form-control" value="${customer.license_no}" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-save"></i> Update Customer
                        </button>
                    </div>
                </form>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

function updateCustomer(id, event) {
    event.preventDefault();

    const updates = {
        name: document.getElementById('editCustomerName').value,
        email: document.getElementById('editCustomerEmail').value,
        phone: document.getElementById('editCustomerPhone').value,
        license_no: document.getElementById('editCustomerLicense').value
    };

    if (db.updateCustomer(id, updates)) {
        closeModal();
        loadCustomersTable();
        showNotification('Customer updated successfully!', 'success');
    } else {
        showNotification('Failed to update customer!', 'error');
    }

    return false;
}

function deleteCustomer(id) {
    if (confirm('Are you sure you want to delete this customer?')) {
        if (db.deleteCustomer(id)) {
            loadCustomersTable();
            loadDashboardData();
            showNotification('Customer deleted successfully!', 'success');
        } else {
            showNotification('Failed to delete customer!', 'error');
        }
    }
}

function viewCustomer(id) {
    const customers = db.getCustomers();
    const customer = customers.find(c => c.customer_id === id);

    if (customer) {
        alert(
            `Customer Details:\n\n` +
            `ID: ${customer.customer_id}\n` +
            `Name: ${customer.name}\n` +
            `Email: ${customer.email}\n` +
            `Phone: ${customer.phone}\n` +
            `License No: ${customer.license_no}`
        );
    }
}

function showAddEmployeeModal() {
    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-user-tie"></i> Add New Employee</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addEmployeeForm" onsubmit="return addEmployee(event)">
                <div class="form-group">
                    <label for="employeeId">Employee ID</label>
                    <input type="number" id="employeeId" class="form-control" placeholder="Auto-generated if empty">
                </div>
                <div class="form-group">
                    <label for="employeeName">Full Name</label>
                    <input type="text" id="employeeName" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="employeeRole">Role</label>
                    <select id="employeeRole" class="form-control" required>
                        <option value="">Select Role</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales Manager">Sales Manager</option>
                        <option value="Agent">Agent</option>
                        <option value="Support">Support</option>
                        <option value="Mechanic">Mechanic</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="employeeSalary">Salary ($)</label>
                    <input type="number" id="employeeSalary" class="form-control" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Save Employee
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';
}

function addEmployee(event) {
    event.preventDefault();

    const employee = {
        name: document.getElementById('employeeName').value,
        role: document.getElementById('employeeRole').value,
        salary: parseFloat(document.getElementById('employeeSalary').value)
    };

    const employeeId = document.getElementById('employeeId').value;
    if (employeeId) {
        employee.employee_id = parseInt(employeeId);
    }

    db.addEmployee(employee);
    closeModal();
    loadEmployeesTable();

    showNotification('Employee added successfully!', 'success');
    return false;
}

function editEmployee(id) {
    const employees = db.getEmployees();
    const employee = employees.find(e => e.employee_id === id);

    if (employee) {
        const modal = document.getElementById('addCarModal');
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-edit"></i> Edit Employee</h3>
                    <button class="close-modal" onclick="closeModal()">&times;</button>
                </div>
                <form id="editEmployeeForm" onsubmit="return updateEmployee(${id}, event)">
                    <div class="form-group">
                        <label for="editEmployeeId">Employee ID</label>
                        <input type="text" id="editEmployeeId" class="form-control" value="${employee.employee_id}" disabled>
                    </div>
                    <div class="form-group">
                        <label for="editEmployeeName">Full Name</label>
                        <input type="text" id="editEmployeeName" class="form-control" value="${employee.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editEmployeeRole">Role</label>
                        <select id="editEmployeeRole" class="form-control" required>
                            <option value="Manager" ${employee.role === 'Manager' ? 'selected' : ''}>Manager</option>
                            <option value="Sales Manager" ${employee.role === 'Sales Manager' ? 'selected' : ''}>Sales Manager</option>
                            <option value="Agent" ${employee.role === 'Agent' ? 'selected' : ''}>Agent</option>
                            <option value="Support" ${employee.role === 'Support' ? 'selected' : ''}>Support</option>
                            <option value="Mechanic" ${employee.role === 'Mechanic' ? 'selected' : ''}>Mechanic</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editEmployeeSalary">Salary ($)</label>
                        <input type="number" id="editEmployeeSalary" class="form-control" value="${employee.salary}" min="0" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-save"></i> Update Employee
                        </button>
                    </div>
                </form>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

function updateEmployee(id, event) {
    event.preventDefault();

    const updates = {
        name: document.getElementById('editEmployeeName').value,
        role: document.getElementById('editEmployeeRole').value,
        salary: parseFloat(document.getElementById('editEmployeeSalary').value)
    };

    if (db.updateEmployee(id, updates)) {
        closeModal();
        loadEmployeesTable();
        showNotification('Employee updated successfully!', 'success');
    } else {
        showNotification('Failed to update employee!', 'error');
    }

    return false;
}

function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        if (db.deleteEmployee(id)) {
            loadEmployeesTable();
            showNotification('Employee deleted successfully!', 'success');
        } else {
            showNotification('Failed to delete employee!', 'error');
        }
    }
}

function viewEmployee(id) {
    const employees = db.getEmployees();
    const employee = employees.find(e => e.employee_id === id);

    if (employee) {
        alert(
            `Employee Details:\n\n` +
            `ID: ${employee.employee_id}\n` +
            `Name: ${employee.name}\n` +
            `Role: ${employee.role}\n` +
            `Salary: $${employee.salary.toLocaleString()}`
        );
    }
}

// Other modals (bookings, rentals, payments) - simplified versions
function showAddBookingModal() {
    const customers = db.getCustomers();
    const cars = db.getCars().filter(car => car.status === 'AVAILABLE');

    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-calendar-plus"></i> New Booking</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addBookingForm" onsubmit="return addBooking(event)">
                <div class="form-group">
                    <label for="bookingCustomer">Customer</label>
                    <select id="bookingCustomer" class="form-control" required>
                        <option value="">Select Customer</option>
                        ${customers.map(c =>
        `<option value="${c.customer_id}">${c.name} (${c.email})</option>`
    ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="bookingCar">Car</label>
                    <select id="bookingCar" class="form-control" required>
                        <option value="">Select Car</option>
                        ${cars.map(c =>
        `<option value="${c.car_id}">${c.brand} ${c.model} - $${c.price_per_day}/day</option>`
    ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="bookingStartDate">Start Date</label>
                    <input type="date" id="bookingStartDate" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="bookingEndDate">End Date</label>
                    <input type="date" id="bookingEndDate" class="form-control" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Create Booking
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingStartDate').min = today;
    document.getElementById('bookingEndDate').min = today;
}

function addBooking(event) {
    event.preventDefault();

    const booking = {
        customer_id: parseInt(document.getElementById('bookingCustomer').value),
        car_id: parseInt(document.getElementById('bookingCar').value),
        start_date: document.getElementById('bookingStartDate').value,
        end_date: document.getElementById('bookingEndDate').value,
        total_cost: 0  // Calculate based on car price and days
    };

    // Calculate total cost
    const cars = db.getCars();
    const car = cars.find(c => c.car_id === booking.car_id);
    if (car) {
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        booking.total_cost = days * car.price_per_day;

        // Update car status
        db.updateCar(booking.car_id, { status: 'RENTED' });
    }

    db.addBooking(booking);
    closeModal();
    loadBookingsTable();
    loadCarsTable();
    loadDashboardData();

    showNotification('Booking created successfully!', 'success');
    return false;
}

function showAddRentalModal() {
    const bookings = db.getBookings();

    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-key"></i> New Rental</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addRentalForm" onsubmit="return addRental(event)">
                <div class="form-group">
                    <label for="rentalBooking">Booking</label>
                    <select id="rentalBooking" class="form-control" required>
                        <option value="">Select Booking</option>
                        ${bookings.map(b =>
        `<option value="${b.booking_id}">Booking #${b.booking_id}</option>`
    ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="rentalPickupDate">Pickup Date</label>
                    <input type="date" id="rentalPickupDate" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="rentalReturnDate">Return Date</label>
                    <input type="date" id="rentalReturnDate" class="form-control">
                </div>
                <div class="form-group">
                    <label for="rentalLateFee">Late Fee ($)</label>
                    <input type="number" id="rentalLateFee" class="form-control" min="0" value="0">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Create Rental
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';
}

function addRental(event) {
    event.preventDefault();

    const rental = {
        booking_id: parseInt(document.getElementById('rentalBooking').value),
        pickup_date: document.getElementById('rentalPickupDate').value,
        return_date: document.getElementById('rentalReturnDate').value || null,
        late_fee: parseFloat(document.getElementById('rentalLateFee').value) || 0
    };

    db.addRental(rental);
    closeModal();
    loadRentalsTable();
    showNotification('Rental created successfully!', 'success');
    return false;
}

function showAddPaymentModal() {
    const bookings = db.getBookings();

    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-credit-card"></i> New Payment</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <form id="addPaymentForm" onsubmit="return addPayment(event)">
                <div class="form-group">
                    <label for="paymentBooking">Booking</label>
                    <select id="paymentBooking" class="form-control" required>
                        <option value="">Select Booking</option>
                        ${bookings.map(b =>
        `<option value="${b.booking_id}">Booking #${b.booking_id} ($${b.total_cost})</option>`
    ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="paymentAmount">Amount ($)</label>
                    <input type="number" id="paymentAmount" class="form-control" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label for="paymentDate">Payment Date</label>
                    <input type="date" id="paymentDate" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" class="form-control" required>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <i class="fas fa-save"></i> Record Payment
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.style.display = 'flex';

    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('paymentDate').value = today;
}

function addPayment(event) {
    event.preventDefault();

    const payment = {
        booking_id: parseInt(document.getElementById('paymentBooking').value),
        amount: parseFloat(document.getElementById('paymentAmount').value),
        payment_date: document.getElementById('paymentDate').value,
        payment_method: document.getElementById('paymentMethod').value
    };

    db.addPayment(payment);
    closeModal();
    loadPaymentsTable();
    loadDashboardData();

    showNotification('Payment recorded successfully!', 'success');
    return false;
}

function closeModal() {
    document.getElementById('addCarModal').style.display = 'none';
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// SQL Console Functions
function toggleSqlConsole() {
    const panel = document.querySelector('.sql-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function executeSqlQuery() {
    const query = document.getElementById('sql-query').value.trim();
    const results = db.executeSQLQuery(query);

    const output = document.getElementById('sql-results-output');
    if (Array.isArray(results)) {
        if (results.length === 0) {
            output.textContent = 'No results found.';
        } else {
            output.textContent = JSON.stringify(results, null, 2);
        }
    } else if (results.error) {
        output.textContent = `Error: ${results.error}`;
    } else {
        output.textContent = JSON.stringify(results, null, 2);
    }
}

// Database Initialization
function initializeDatabase() {
    if (confirm('This will reset all data to sample data. Are you sure?')) {
        localStorage.removeItem('carRentalDB');
        db.initializeDB();
        loadSectionData('dashboard');
        showNotification('Database initialized with sample data!', 'success');
    }
}

// Show Reports
function showReports() {
    const dbData = db.getDB();

    const modal = document.getElementById('addCarModal');
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3><i class="fas fa-chart-bar"></i> System Reports</h3>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <div style="padding: 20px;">
                <h4>System Statistics</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <strong>Total Cars:</strong> ${dbData.cars.length}
                    </div>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <strong>Total Customers:</strong> ${dbData.customers.length}
                    </div>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <strong>Total Employees:</strong> ${dbData.employees.length}
                    </div>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <strong>Total Revenue:</strong> ${dbData.payments.reduce((sum, p) => sum + p.amount, 0)}
                    </div>
                </div>
                
                <h4>Cars by Status</h4>
                <div style="margin: 15px 0;">
                    ${['AVAILABLE', 'RENTED', 'MAINTENANCE'].map(status => {
        const count = dbData.cars.filter(c => c.status === status).length;
        return `
                            <div style="margin: 10px 0;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span>${status}:</span>
                                    <span>${count} cars</span>
                                </div>
                                <div style="background: #e2e8f0; height: 10px; border-radius: 5px; overflow: hidden;">
                                    <div style="background: ${status === 'AVAILABLE' ? '#10b981' :
                status === 'RENTED' ? '#ef4444' : '#f59e0b'
            }; width: ${(count / dbData.cars.length) * 100 || 0}%; height: 100%;"></div>
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
                
                <h4>Employee Performance</h4>
                <div style="margin: 15px 0;">
                    ${dbData.employees.map(emp => {
        const assignedCars = dbData.cars.filter(c => c.employee_id === emp.employee_id);
        const rentedCars = assignedCars.filter(c => c.status === 'RENTED').length;
        return `
                            <div style="background: #f8fafc; padding: 10px; margin: 5px 0; border-radius: 5px;">
                                <strong>${emp.name}</strong> (${emp.role})<br>
                                <small>Assigned Cars: ${assignedCars.length} | Rented: ${rentedCars}</small>
                            </div>
                        `;
    }).join('')}
                </div>
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" onclick="exportDatabase()">
                        <i class="fas fa-download"></i> Export Database
                    </button>
                    <label class="btn btn-warning" style="margin-left: 10px;">
                        <i class="fas fa-upload"></i> Import Database
                        <input type="file" accept=".json" style="display: none;" onchange="importDatabase(event)">
                    </label>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

// Export database for backup
function exportDatabase() {
    const data = db.getDB();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'car-rental-db-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Database exported successfully!', 'success');
}

// Import database from backup
function importDatabase(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem('carRentalDB', JSON.stringify(data));
            showNotification('Database imported successfully!', 'success');
            loadSectionData('dashboard');
        } catch (error) {
            showNotification('Invalid database file!', 'error');
        }
    };
    reader.readAsText(file);
}

// Navigation Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add click handlers for navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Initialize dashboard
    loadDashboardData();

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('addCarModal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Initialize SQL console with sample query
    document.getElementById('sql-query').value = 'SELECT * FROM Employee';

    // Add search functionality for cars
    document.getElementById('car-search')?.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#cars-table-body tr');

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Add filter functionality for cars
    document.getElementById('car-status-filter')?.addEventListener('change', function (e) {
        const status = e.target.value;
        const rows = document.querySelectorAll('#cars-table-body tr');

        rows.forEach(row => {
            if (status === 'all') {
                row.style.display = '';
            } else {
                const rowStatus = row.querySelector('.status-badge')?.textContent;
                row.style.display = rowStatus === status ? '' : 'none';
            }
        });
    });
});