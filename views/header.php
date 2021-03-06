<!DOCTYPE html>

<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php if (isset($title)): ?>
        <title>CS75 Finance | <?= htmlspecialchars($title) ?></title>
    <?php else: ?>
        <title>CS75 Finance</title>
    <?php endif ?>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/style.css">

    <link rel="icon" type="image/png" href="img/favicon.png">

    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript"
          src="https://www.google.com/jsapi?autoload={
            'modules':[{
              'name':'visualization',
              'version':'1',
              'packages':['corechart']
            }]
          }"></script>
    <script type="text/javascript" src="js/scripts.js"></script>

  </head>
  <body>

    <div class="container">
      <div class="row">
        <header class="header" role="banner">
          <h1 class="site-title"><a href="/">CS75 Finance</a></h1>
        </header>
