<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DO Fisheries Dashboard</title>
<link rel="stylesheet" href="../css/dash.css">
<script defer src="script.js"></script>
</head>
<body>

<div class="sidebar">
    <div class="logo">
        <h2>DO Fisheries</h2>
    </div>
    <ul>
        <li class="active"><span>🏠</span> Dashboard</li>
        <hr>
        <label>COMPONENTS</label>
        <li><span>👥</span> User Management</li>
        <li><span>📄</span> Area</li>
    </ul>
</div>

<div class="topbar">
    <input type="text" placeholder="Search...">
    <div class="top-profile">
        <span>🔔</span>
        <img src="https://i.imgur.com/5cQZr4P.png" class="avatar">
        <span class="username">Hi, Admin</span>
    </div>
</div>

<div class="content">
    <h2>Dashboard</h2>

    <div class="card">
        <div class="card-icon">👥</div>
        <div>
            <h4>Total Users</h4>
            <p>4</p>
        </div>
    </div>

    <div class="user-table">
        <h3>User</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Status</th><th>Action</th>
                </tr>
            </thead>
            <tbody id="userData">
                <tr>
                    <td>1</td><td>Admin</td><td>admin@gmail.com</td><td>Verified</td>
                    <td>
                        <button class="edit">Edit</button>
                        <button class="archive" onclick="archiveRow(this)">Archive</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td><td>Admin2</td><td>admin2@gmail.com</td><td>Verified</td>
                    <td>
                        <button class="edit">Edit</button>
                        <button class="archive" onclick="archiveRow(this)">Archive</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td><td>Admin3</td><td>admin3@gmail.com</td><td>Verified</td>
                    <td>
                        <button class="edit">Edit</button>
                        <button class="archive" onclick="archiveRow(this)">Archive</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</body>
</html>
