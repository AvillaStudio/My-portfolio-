<?php
include "database.php";

$result = $conn->query("SELECT * FROM chat_messages ORDER BY timestamp DESC");
while ($row = $result->fetch_assoc()) {
    echo "<div class='chat-message'><strong>{$row['username']}:</strong> {$row['message']}</div>";
}
?>