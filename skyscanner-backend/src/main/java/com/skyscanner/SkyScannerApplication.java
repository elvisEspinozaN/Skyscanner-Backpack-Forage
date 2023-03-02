package com.skyscanner;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SkyScannerApplication extends Application<SkyScannerConfiguration> {

    public static void main(final String[] args) throws Exception {
        new SkyScannerApplication().run(args);
    }

    @Override
    public String getName() {
        return "hoen-scanner";
    }

    @Override
    public void initialize(final Bootstrap<SkyScannerConfiguration> bootstrap) {

    }

    @Override
    public void run(final SkyScannerConfiguration configuration, final Environment environment) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        // Read the json file from the resources folder
        // and convert its JSON data to an array of SearchResult objects.
        List<SearchResult> carResults = Arrays.asList(
                mapper.readValue(
                        getClass().getClassLoader().getResource("rental_cars.json"),
                        SearchResult[].class
                )
        );

        List<SearchResult> hotelResults = Arrays.asList(
                mapper.readValue(
                        getClass().getClassLoader().getResource("hotels.json"),
                        SearchResult[].class
                )
        );
        List<SearchResult> searchResults = new ArrayList<>();

        // Add all the SearchResult objects from json files
        searchResults.addAll(carResults);
        searchResults.addAll(hotelResults);

    }

}
