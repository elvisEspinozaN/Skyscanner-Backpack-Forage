package com.skyscanner;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;

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
    public void run(final SkyScannerConfiguration configuration, final Environment environment) {

    }

}
