function tsp_ls(matrix) {
    let len = matrix.length;

    route = generateRandomRoute(len);

    var exploration = true;
    while (exploration) {
        exploration = false;
        for (let i = 0; i < len - 1; i++) {
            for (let k = i + 1; k < len; k++) {
                let newRoute = TwoOptSwap(route, i, k);
                if (evaluateRoute(newRoute, matrix) < evaluateRoute(route, matrix)) {
                    route = newRoute;
                    exploration = true;
                }
            }
        }
    }

    return evaluateRoute(route, matrix);
    
    function TwoOptSwap(route, i, k) {
        let segment = route.slice(i, k + 1);
        let enhancedSegment = Enhancement(segment);
        return route.slice(0, i).concat(enhancedSegment).concat(route.slice(k + 1));
    }
    function evaluateRoute(route, matrix) {
        let evaluation = 0;
        for (let i = 0; i < route.length - 1; i++) {
            evaluation += matrix[route[i]][route[i + 1]];
        }
        return evaluation;
    }

    function Enhancement(segment) {
        return segment.reverse();
    }

    function generateRandomRoute(length) {
        let randomRoute = Array.from(Array(length).keys());
        return randomRoute;
    }
}

// const distanceMatrix = [
//     [0, 3, 4, 2, 7],
//     [3, 0, 4, 6, 3],
//     [4, 4, 0, 5, 8],
//     [2, 6, 5, 0, 6],
//     [7, 3, 8, 6, 0]
// ];

// console.log("Length:", tsp_ls(distanceMatrix));


/*
Sources Used: 
Referred to countmooshroom analysis 
TA
*/
